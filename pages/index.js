import SEO from 'components/SEO'
import styled from 'styled-components'
import { format } from 'almoment'

const WelcomeTextWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
`
export default function Home() {
    console.log(format(new Date().getTime(), 'hh:mm:ss'))
    return (
        <>
            <SEO />
            <WelcomeTextWrapper>Welcome to NextJS starter</WelcomeTextWrapper>
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
