import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faPinterest , faInstagram} from "@fortawesome/free-brands-svg-icons";
export default function page(){
    return (
        <main className=" bg-gradient-to-b relative flex justify-center from-[#1f1e29] to-[#241d2a] w-screen h-screen">
            <div className=" absolute top-0 z-0 left-0   w-full h-full bg-[url(../public/images/bg-stars.svg)] bg-no-repeat
            bg-bottom bg-contain">
            </div>
            <div className=" absolute top-0 left-0 w-full z-50 h-full bg-[url(../public/images/pattern-hills.svg)] bg-no-repeat
            bg-bottom min-[550px]:bg-contain bg-fill">
                <div className=" absolute w-full h-1/4 flex  space-x-7 flex-row justify-center items-center  bottom-0 left-0">
                    <FontAwesomeIcon icon={faSquareFacebook} size="sm" className=" w-10 h-10 text-[#8486a9] hover:text-[#fb6087] cursor-pointer"/>
                    <FontAwesomeIcon icon={faPinterest} size="sm" className=" w-10 h-10 text-[#8486a9] hover:text-[#fb6087] cursor-pointer"/>
                    <FontAwesomeIcon icon={faInstagram} size="sm" className=" w-10 h-10 text-[#8486a9] hover:text-[#fb6087] cursor-pointer"/>
                </div>
            </div>
            <div className=" flex mt-40 flex-col space-y-40">
                <h1 className=" text-white text-center font-bold text-xl tracking-[0.5rem]">
                    WE'RE LAUNCHING SOON
                </h1>
                <div className=" min-[550px]:px-0 px-5 flex flex-row space-x-5 min-[550px]:space-x-10 z-50 justify-center items-center">
                    <Card number="08" type="DAYS" />
                    <Card number="23" type="HOURS"/>
                    <Card number="53" type="MINUTES"/>
                    <Card number="41" type="SECONDS"/>                
                </div>
            </div>
            
        </main>
    )
}