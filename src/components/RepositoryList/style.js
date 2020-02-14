import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`

export const Repository = styled.div`
    width: 250px;
    height: 325px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #fff;
    margin: 20px;
    
    header{
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 64px;
        }
        strong{
            font-size: 24px;
            margin-top: 10px;
        }
        small {
            font-size: 14px;
            color: #666;
        }
    }
    ul{
        list-style: none;

        li{
            font-weight: bold;
            padding: 12px 20px;
        }
        small{
            font-weight: normal;
            font-size: 12px;
            color: #999;
            font-style: italic;
        }
        li:nth-child(2n - 1){
            background-color: gray;
        }
    }
`
