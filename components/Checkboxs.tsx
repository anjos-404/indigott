
import { Aulas } from "@/app/interfaces";

interface Props {
  aulas1: Aulas[];
  aulas2: Aulas[];
  titulo1:string;
  titulo2:string;
}

export default function Checkboxs({ aulas1,aulas2,titulo1,titulo2 }: Props) {
  return (
    <div className="flex gap-6">

 <div className="flex flex-col">
         <span className="desc">{titulo1}</span>
      {aulas1.map((element) => (
          <><span className="leading-8 lines">
              <input type="checkbox" />
              <span className="lines">{element.inicio}h até {element.final} </span><span className="font-bold">{element.professor}</span>
          </span></>
      
      ))}
        </div>

        <div className="flex flex-col">
            <span className="desc">{titulo2}</span>
      {aulas2.map((element) => (
          <><span className="leading-8 lines">
              <input type="checkbox" />
              <span>
                             <span className="lines">{element.inicio}h até {element.final} </span><span className="font-bold">{element.professor}</span>
              </span>
          </span></>
      ))}

</div>
    </div>


  );
}
