import Image from "next/image"
import Title from "@/public/What Those Who Have Joined Say To Pendidikan Tingkat Dasar KSEP_.png"
import Star from "@/public/STAR 3.svg"

const Testimoni = () => {
  return (
    <section>
        <div className='h-full bg-gradient-to-br from-[#A958A7] to-[#3E205A] flex flex-col items-center justify-center py-20 relative'>
            <Image 
                src={Star}
                alt="Star"
                className="absolute top-10 md:top-0 left-0 z-0 w-[20vw]"
            />
            <Image 
                src={Title}
                alt="Title"
                className="pb-10 w-[90%] md:w-[70%] z-10"
            />
            <div className="grid md:grid-cols-3 xl:gap-10 xl:px-20 z-10 px-10 gap-5">
                <div className="bg-gradient-to-b from-[#F5C3EE] to-[#A74899] border-[3px] rounded-2xl overflow-hidden py-10 px-2">
                    <p className="font-[700] text-3xl text-[#C72F11] white-stroke-text-title pl-[20px] pr-[20px]"> Owen </p>
                    <p className="font-[700] text-[#FFF2B0] text-lg px-[18px]"> Mahasiswa Teknik Informatika </p>
                    <p className="text-white font-[500] px-[18px] md:text-sm lg:text-base"> Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
                </div>
                <div className="bg-gradient-to-b from-[#F5C3EE] to-[#A74899] border-[3px] rounded-2xl overflow-hidden py-10 px-2">
                    <p className="font-[700] text-3xl text-[#C72F11] white-stroke-text-title pl-[20px] pr-[20px]"> Owen </p>
                    <p className="font-[700] text-[#FFF2B0] text-lg px-[18px]"> Mahasiswa Teknik Informatika </p>
                    <p className="text-white font-[500] px-[18px] md:text-sm lg:text-base"> Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
                </div>
                <div className="bg-gradient-to-b from-[#F5C3EE] to-[#A74899] border-[3px] rounded-2xl overflow-hidden py-10 px-2">
                    <p className="font-[700] text-3xl text-[#C72F11] white-stroke-text-title pl-[20px] pr-[20px]"> Owen </p>
                    <p className="font-[700] text-[#FFF2B0] text-lg px-[18px]"> Mahasiswa Teknik Informatika </p>
                    <p className="text-white font-[500] px-[18px] md:text-sm lg:text-base"> Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimoni
