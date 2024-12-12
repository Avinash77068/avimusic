import { FaPlay } from "react-icons/fa";
import { Context } from "../Context/Context";
import { useContext } from "react";
const date = new Date();
const Time = date.toLocaleDateString();

export default function Card() {
  let { checkData, store }: any = useContext(Context);
  let filterOut = store.filter((val: any) => {
    return val.singerName.toLowerCase().includes(checkData);
  });

  console.log(store);
  console.log(checkData, "Checkdata");
  return (
    <div className="w-full">
      <div className="  flex mt-[100px] ml-[30px]  mb-[100px] flex-wrap justify-center lg:justify-start ">
        {filterOut.length ? (
          filterOut.map((val: any) => {
            return (
              <div
                key={val.id}
                className="box1 relative  w-[250px] md:w-[200px]   bg-black  text-center border-slate-100 mb-4 mr-4 border-[5px] rounded-[19px] text-white"
              >
                <div className="justify-center flex items-center pl-2 pr-2 pt-2"><img className="w-[200px] rounded-[10px]" src={val.img} />{" "}</div>
                <p className="text-[10px] pt-3 pb-2">
                  {Time} {val.singerName}
                  {val.title}
                </p>
                <div className="justify-center absolute itmes-center flex   rounded-full -mt-[120px]  ml-[35%] p-[15px] bg-red-400 max-w-max hover:bg-grey-600 opacity-100">
                  {" "}
                  <FaPlay />
                </div>
              </div>
            );
          })
        ) : (
          <div className="justify-center items-center flex"><p className=" text-white text-center ">Nothing Data Found</p></div>
        )}
      </div>
    </div>
  );
}
