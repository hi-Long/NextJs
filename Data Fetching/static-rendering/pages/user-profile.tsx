import { GetServerSideProps } from "next"

const UserProfilePage: React.FC<{ username: string }> = props => {
    return (
        <div>
            <h1>{props.username}</h1>
        </div>
    )
}

export default UserProfilePage

export const getServerSideProps: GetServerSideProps = async context => {
    const { params, req, res } = context

    console.log(req)
    console.log(re s)

    return {
        props: {
            username: 'Max'
        }
    }
}