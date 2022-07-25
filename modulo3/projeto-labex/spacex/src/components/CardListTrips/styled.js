import styled from "styled-components";

export const ContainerCardListTrips = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 400px;
  height:230px;
  max-height:250px;
  overflow:auto;
  min-height: 100px;
  font-size: 20px;
  border-radius: 10px;
background-color:rgba(123, 65, 139, 0.45);
box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
p{
    margin-left:20px;
    margin-top:9px;
}
strong{
 
  color:white;
  text-shadow:1px 1px 2px black;
}
`