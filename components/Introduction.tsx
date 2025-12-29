export default function Introduction(){
    return(
        <div className=" mt-12 mb-4 md:mb-0  md:mt-10">
            <h4 className="text-[40px] leading-normal  font-bold font-owners">INSCREVA-SE</h4>
          <p>Bem-vindo ao Índigo, preencha o formulário abaixo para completar sua inscrição e participar do evento.</p>
          <div className=" w-76 flex flex-col md:w-125 gap-2 mb-4">
           <label htmlFor="nome"></label>
          <input className="border-0.5 rounded bg-[#2A283F] indent-3 px-1 py-0.5
 text-[#4F4F70]" id="nome" type="text" placeholder="NOME"></input>
          <label htmlFor="telefone"></label>
          <input className="border-0.5  rounded bg-[#2A283F] indent-3 text-[#4F4F70] px-1 py-0.5
" id="telefone" type="text" placeholder="TELEFONE"></input>
          </div>
         
        </div>
    )
}