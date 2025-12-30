
import { Aulas } from "@/app/interfaces";

interface Props {
  aulas1: Aulas[];
  aulas2: Aulas[];
  titulo1:string;
  titulo2:string;
}

export default function Checkboxs({ aulas1,aulas2,titulo1,titulo2 }: Props) {
  return (
<div className="flex flex-col gap-6 md:flex-row">

  <div className="flex flex-col">
    <span className="desc font-bold font-owners">{titulo1}</span>

    {aulas1.map((element, index) => (
      <div key={index} className="flex items-center leading-8">
        
      <input
  type="checkbox"
  id={`chk1${index}`}
  className="sr-only"
/>

<label
  htmlFor={`chk1${index}`}
  className="
    min-w-7 h-7
    cursor-pointer
    rounded-sm
    bg-[#2a283f]
    flex items-center justify-center
    text-white mr-1
  "
>
</label>


        <span className=" shrink-0">
          {element.inicio} até {element.final}
        </span>

        <span className="flex-1 font-black font-owners text-end">
          {element.professor}
        </span>

      </div>
    ))}
  </div>

  <div className="flex flex-col">
    <span className="desc">{titulo2}</span>

    {aulas2.map((element, index) => (
      <div key={index} className="flex items-center leading-8">
        
       <input
  type="checkbox"
  id={`chk2${index}`}
  className="sr-only"
/>

<label
  htmlFor={`chk2${index}`}
  className="
    min-w-7 h-7
    cursor-pointer
    rounded-sm
    bg-[#2a283f]
    flex items-center justify-center
    transition
    text-white
    mr-1
  "
>
</label>


        <span className=" shrink-0">
          {element.inicio} até {element.final}
        </span>

        <span className="flex-1 font-black font-owners text-end">
          {element.professor}
        </span>

      </div>
    ))}
  </div>

</div>



  );
}
