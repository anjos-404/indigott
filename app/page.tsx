import Image from "next/image";
import ContainerPrinc from "@/components/ContainerPrinc"
import Checkboxs from "@/components/Checkboxs";
import { Aulas } from "@/app/interfaces";
import Introduction from "@/components/Introduction";
import Attachment from "@/components/Attachment";
import Payment from "@/components/Payment";

const aulas:Aulas [] = [
  {inicio:8,final:10,professor:'teste'},
  {inicio:8,final:10,professor:'teste'},
  {inicio:8,final:10,professor:'teste'},
  {inicio:8,final:10,professor:'teste'}
]

export default function Home() {
  return (
      <ContainerPrinc>
      <div className="  min-h-screen flex w-full h-full justify-center items-center  md:w-[40%]  md:justify-end md:pr-6 bg-gradient-to-b from-[#5694D8] to-[#9966FF]">
    <Image
      src="indigo.svg"
      width={100}
      height={100}
      alt=""
      className="w-[50%] h-auto"
    />
  </div>
        <div className="  min-h-screen flex  items-center w-full bg-[#110F1C] h-full md:w-[60%] md:justify-start">
    <div className=" m-4 flex mt-8 flex-col  md:m-0 md:mt-0 md:justify-normal md:ml-24 h-full">
          <Introduction></Introduction>
          <Checkboxs titulo1="AULAS NO SÁBADO | 14.09" aulas1={aulas} titulo2="AULAS NO DOMINGO | 15.09" aulas2={aulas}></Checkboxs>
          <Payment></Payment>
          <Attachment></Attachment>
          </div>
      
        </div>
      </ContainerPrinc>
  );
}
