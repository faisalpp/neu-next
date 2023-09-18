import React,{useState,useRef,useEffect} from 'react'
import DropDown from '../Filter/DropDown'
import { Checkbox } from '@material-tailwind/react'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios'

const TypeFilter = ({filters}) => {
  const [f1,setF1] = useState()
  const [f2,setF2] = useState()
  const [f3,setF3] = useState()

  const [check1,setCheck1] = useState(false);
  const [check2,setCheck2] = useState(false);
  const [check3,setCheck3] = useState(false);

  const getRatingProducts = async (check,rating) => {
    if(check){
      console.log(`${rating} is ${check}`)
    }
  }

  const handleCheckboxChange = (checkboxNumber, checked,rating) => {
    switch (checkboxNumber) {
      case 1: {
        setCheck1(checked);
        setCheck2(isCheck=>isCheck ? !isCheck : isCheck);
        setCheck3(isCheck=>isCheck ? !isCheck : isCheck);
        getRatingProducts(checked,rating)
        break;
      }
      case 2: {
        setCheck2(checked);
        setCheck1(isCheck=>isCheck ? !isCheck : isCheck);
        setCheck3(isCheck=>isCheck ? !isCheck : isCheck);
        getRatingProducts(checked,rating)
        break;
      }
      case 3:{
        setCheck3(checked);
        setCheck2(isCheck=>isCheck ? !isCheck : isCheck);
        setCheck1(isCheck=>isCheck ? !isCheck : isCheck);
        getRatingProducts(checked,rating)
        break;
      }
      default:
        break;
    }
  };

  useEffect(()=>{
    setF1(filters.find(obj => obj._id === 5));
    setF2(filters.find(obj => obj._id === 4));
    setF3(filters.find(obj => obj._id === 3));
  },[filters])


  return (
    <>
      <DropDown title="Comatic Rating" >
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} checked={check1} onChange={(e) => handleCheckboxChange(1, e.target.checked,5)} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div className="flex justify-end w-full text-xs" ><span>({f1 ? f1?.count : 0})</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} checked={check2} onChange={(e) => handleCheckboxChange(2, e.target.checked,4)} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div className="flex justify-end w-full text-xs" ><span>({f2 ? f2?.count : 0})</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} checked={check3} onChange={(e) => handleCheckboxChange(3, e.target.checked,3)} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div className="flex justify-end w-full text-xs" ><span>({f3 ? f3?.count : 0})</span></div>
        </div>
        {/* Item End */}
      </DropDown>
    </>
  )
}

export default TypeFilter