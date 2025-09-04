import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";


export const Container = styled.div`
img{
   z-index: -99;
   position: absolute;
   filter: blur(5px);
     @media screen and (max-width: 900px) {
 width: 100%;
 height: 100%;
 position: relative;
 bottom: 0px;
 }
}
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
  @media screen and (max-width: 900px) {
height: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50%;
img{
   position: absolute;
}
 }
 `
 export const Todolist = styled.div`
 background: rgba(58, 110, 106, 0.5);
 padding: 30px 20px;
 border-radius: 20px;
 ul{
    padding: 0;
    margin-top: 60px;
 }
 @media screen and (max-width: 900px) {
 width: 80%;
 height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

button{
   margin-top: 10px;
}
input{
   width: auto;
}
 }
 `
  export const Input = styled.input`
  background: rgba(238, 238, 238, 0.85);
 border-radius: 5px;
 border: 2px solid;
 height: 40px;
 margin-right: 40px;
 width: 342px;
 `
  export const Button = styled.button`
 background: #129248ff;
 border-radius: 5px;
 font-size: 17px;
 font-weight: 900;
 line-height: 2px;
 height: 40px;
 border: none;
 color: white;
 width: 130px;
 cursor: pointer;
 &:hover{
   opacity: 0.8;
 }
&:active{
   opacity: 0.6;
}
 
 `
 export const Listitem = styled.div`
 background: ${props => props.$isfinished ? '#429c40ff' : '#c8d1ceff'};
 box-shadow: 1px 4px 10px rgb(0, 0, 0, 0.2);
 border-radius: 5px;
 height: 60px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 30px;
 padding: 0 10px;
 width: 500px;
 &:hover{
   box-shadow: 0px 0px 10px 5px rgb(0, 0, 0, 0.4); 
 }
 color:${props => props.$isfinished ? '#000000ff' : '#000000ff'};
 li{
    list-style: none;
 }
 .texts{
   display: flex;
}
.texts2{
   gap: 10px;
   display: flex;
}
.DA{
   opacity: 0;
}
.time{
 
   height: 100%;
   display: flex;
   align-items: center;
}
  @media screen and (max-width: 900px){
padding: 0;
   width: 100%;
display: inline-block;
height: auto;
padding-top: 2.5%;
box-shadow: 3px 5px 10px #000;
.DA{
   opacity: 1;
}
.DA2{
   opacity: 0;
}
.texts{
   display: flex;
   justify-content: space-between;
 
}
div{
   display: flex;
   justify-content: space-between;
   div{
       gap: 10px;
       align-items: center;
       padding-left: 10px;
       justify-content: center;
   }
   padding-right: 10px;
   align-items: center;
}
.time{
   height: auto;
   width: 100%;
}
  }

 `
 export const Trash = styled(FcEmptyTrash)`
 cursor: pointer;
 position: relative;
&:hover{
   transform: scale(1.3);
}
 
 `
 export const Check = styled(FcCheckmark)`
background: #9aff9aff;
  &:hover{
   transform: scale(1.3);
}
 cursor: pointer;
 `
 export const Divid = styled.div`
 border-left: 2px  solid;
 display: flex;
 flex-direction: column;
 padding-left: 5px;
 margin-right: -15%;
   @media screen and (max-width: 900px){
   border-top: solid;
   border-left: none;
   width: 100%;
   height: 50px;
   margin-top: 5%;
   margin-right: 0;
   position: relative;
   left: -10px;
   span{
      padding: 2px;
      border: solid 1px;
      border-radius: 5px;
      background: #17c96193;
      box-shadow: 2px 2px 5px #000;
   }
   }
 `