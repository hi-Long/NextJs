import { GetServerSideProps } from "next"

const UserIdPage: React.FC<{ id: string }> = props => {
    return <h1>{props.id}</h1>
}

export default UserIdPage

export const getServerSideProps: GetServerSideProps = context => {
    const { params } = context
    const userId = params.uid

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}