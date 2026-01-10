import Image from "next/image";
import ContainerPrinc from "@/components/ContainerPrinc"
import Checkboxs from "@/components/Checkboxs";
import { Aulas } from "@/app/interfaces";
import Introduction from "@/components/Introduction";
import Attachment from "@/components/Attachment";
import Payment from "@/components/Payment";

const aulas:Aulas [] = [
  {inicio:'13h',final:'14h10',professor:'ERICK'},
  {inicio:'14h20',final:'15h30',professor:'MAX'},
  {inicio:'15h40',final:'16h50',professor:'KAIH'},
  {inicio:'17h',final:'18h10',professor:'CLAU'}
]

const aulas2:Aulas [] = [
  {inicio:'11h20',final:'12h30',professor:'GABE'},
  {inicio:'13h',final:'14h10',professor:'GABY'},
   {inicio:'14h20',final:'15h30',professor:'ALLY'},
  {inicio:'15h40',final:'16h50',professor:'JHOW'},
  {inicio:'17h40',final:'18h10',professor:'ITALO'}
]

export default function Home() {
  return (
      <ContainerPrinc>
      <div className="  min-h-screen flex w-full h-full justify-center items-center   md:w-[40%]  md:justify-end md:pr-20 bg-gradient-to-b from-[#5694D8] to-[#9966FF]">
    <Image
      src="indigo.svg"
      width={100}
      height={100}
      alt=""
      className="w-[50%] h-auto"
    />
  </div>
        <div className="  md:min-h-screen flex      justify-center items-center w-full bg-[#110F1C] md:h-full md:w-[60%] md:justify-start">
    <div className=" pr-16 pl-16  flex mt-8 flex-col md:pr-0 md:pl-0 md:mt-0 md:justify-center md:ml-24 md:h-full">
          <Introduction></Introduction>
          <Checkboxs titulo1="AULAS NO SÁBADO | 14.09" aulas1={aulas} titulo2="AULAS NO DOMINGO | 15.09" aulas2={aulas2}></Checkboxs>
          <Payment></Payment>
          <Attachment></Attachment>
          </div>
      
        </div>
      </ContainerPrinc>
  );
}
