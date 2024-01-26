import { Button, InputBox, Select } from 'src/components';
import { TagsInput } from './components/TagsInput';
import { MainLayout, HomeLayout } from 'src/components'
import { useState } from 'react';
import { styled } from 'styled-components'

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
`

const MatchBtn = styled.button`
    width: 430px;
    height: 48px;
    background-color: #fff; 
    border-radius: 20px;
    border: 1px lightgray solid;
    font-weight: bold;
    font-size: 18px;
    margin-top: 6px;
    margin-bottom: 10px;
`

const Input = styled.textarea<{ maxLength: string }>`
    height: 50px;
    width: 96%;
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 20px;
`


const RecruitPost = () => {

    let [inputCount, setInputCount] = useState(0);

    const onInputHandler = (e) => {
        setInputCount(
            e.target.value.replace(/<br\s*V?>/gm, '\n').length
        );
      };


    const [teams, setTeams] = useState([
        { value: 'LG', name: 'LG' },
        { value: 'KT', name: 'KT' },
        { value: 'SSG', name: 'SSG' },
        { value: 'NC', name: 'NC' },
        { value: '두산', name: '두산' },
        { value: 'KIA', name: 'KIA' },
        { value: '롯데', name: '롯데' },
        { value: '삼성', name: '삼성' },
        { value: '한화', name: '한화' },
        { value: '키움', name: '키움' },
        { value: '팀무관', name: '팀무관' }
    ])

    const [seats, setSeats] = useState([
        { value: 'cheeringSeat', name: '응원석' },
        { value: 'tableSeat', name: '테이블석' },
        { value: 'vipSeat', name: 'VIP석' },
        { value: 'outfieldSeat', name: '외야석' }
    ])

    const [nums, setNums] = useState([
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
        { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' }
    ])

    return (
        <MainLayout title='직관 메이트 모집하기 '>  
            <HomeLayout>
                <Title>제목(최대 60자)</Title>
                <InputBox height='20px' width='100%'/>
                <MatchBtn>경기를 선택하세요</MatchBtn>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <Select dataSource={ teams } placeholder='응원하는 팀'></Select>
                    <Select dataSource={ seats } placeholder='선호하는 좌석'></Select>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '6px' }}>
                    <span style={{ fontSize: '20px', padding: '10px 10px 0px 0px', fontWeight: 'bold' }}>인원</span> <Select dataSource={ nums } placeholder='인원' width='140px'></Select>
                </div>
                <div style={{ display: 'flex', gap: '30px'}}>
                    <span style={{ fontSize: '20px', padding: '16px 10px 0px 0px', fontWeight: 'bold' }}>태그</span> <TagsInput></TagsInput>
                </div>
                <span style={{ fontSize: '20px', marginTop: '6px', fontWeight: 'bold' }}> 채팅방 소개</span>
                <Input onChange={ onInputHandler } maxLength="300" />
                <p style={{ textAlign: 'right' }}>
                    <span>{ inputCount }</span>
                    <span>/300 자</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'right', gap: '10px' }}>
                    <Button type='parti' width='120px'>채팅방 만들기</Button>
                    <Button type='reset' width='90px'>초기화</Button>
                    <Button type='cancel' width='80px'>취소</Button>
                </div>
            </HomeLayout>
        </MainLayout>
    )
}


export default RecruitPost