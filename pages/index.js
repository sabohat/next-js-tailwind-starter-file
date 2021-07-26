import SEO from 'components/SEO'

export default function Home() {
    return (
        <>
            <SEO />
            Welcome to the project
        </>
    )
}
// export async function getServerSideProps() {
//     const requests = [`${process.env.BASE_URL}`]
//     const [data = null] = await fetchMultipleRequest(urls)
//     return {
//         props: {
//             data,
//         },
//     }
// }
