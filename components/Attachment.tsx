export default function Attachment(){
    return(
        <div className="w-76 flex flex-col space-y-3 md:w-96 ">
            <label htmlFor="file" className="flex items-center border-0.5 text-[#4F4F70] rounded bg-[#2A283F] px-3 py-1 cursor-pointer"> 
                  <img
  src="clips.svg"
  alt="Upload"
  className="w-5 h-5 mr-2"
/>         
              ANEXE AQUI SEU COMPROVANTE</label>
            <input  id="file" type="file" hidden></input>
            <p className="text-[8px] leading-normal">Em caso de dúvidas, entre em contato conosco pelo instagram ou pelo WhatsApp 41 99764-3046.</p>
        </div>

    )
}