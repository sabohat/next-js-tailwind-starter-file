import SEO from 'components/SEO'
import { format } from 'almoment'

export default function Home() {
    console.log(format(new Date().getTime(), 'hh:mm:ss'))
    return (
        <>
            <SEO />
            <p className="bg-red-200 text-lg">Starter template</p>
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
