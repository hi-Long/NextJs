import { GetStaticProps } from "next"
import Product from "../models/product"
import Link from 'next/link'
import fs from 'fs/promises'
import path from "path"

const Home: React.FC<{ products: Product[] }> = props => {

  return (
    <div>
      <ul>
        {props.products.map(p => <li key={p.id}>
          <Link href={`/products/${p.id}`}>
            {p.title}
          </Link>
        </li>)}
      </ul>
    </div>
  )
}


export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData.toString())

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

export default Home
