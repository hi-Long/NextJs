import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"
import fs from 'fs/promises'
import { Fragment } from "react"
import Product from "../../models/product"

const ProductDetailPage: React.FC<{ product: Product }> = props => {

    if (!props.product) {
        return <p>Loading...</p>
    }

    return (
        <Fragment>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
        </Fragment>
    )
}

const getData = async () => {
    const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json')
    const jsonData = await fs.readFile(filePath)
    return JSON.parse(jsonData.toString())
}

export const getStaticProps = async context => {
    const { params } = context
    const productId = params.pid

    const data = await getData()

    const product = data.products.find((p: Product) => p.id === productId)

    if (!product) {
        return { notFound: true }
    }

    return {
        props: { product: product }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData()

    const productIds = data.products.map((p: Product) => p.id)
    const params = productIds.map((id: string) => ({ params: { pid: id } }))

    return {
        paths: params,
        fallback: true
    }
}

export default ProductDetailPage