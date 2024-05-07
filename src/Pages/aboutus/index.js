import Link from "next/link";
import { teamDetails } from "./teamDetails";

const AboutPage = () =>{
    return(
        <div>
            <h1>about Page</h1>
            <ul>
            {teamDetails.map((details)=>(
                <li key={details.id}>
                <Link href={`/aboutus/${details.id}`}>
                    {details.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default AboutPage;