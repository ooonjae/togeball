import { useState } from 'react'
import { HomeLayout, MainLayout, TagList, Title, RadioTagList, InputBox } from 'src/components'
import styled from 'styled-components'

const EssentialWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  margin: 50px;
`
const RowTagListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`

const ColTagListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`
const TitleWrapper = styled.div<{ type? : string } >`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 100px;
  padding-top: ${(prop) => prop.type === 'input'? '13px': ( prop.type === 'value'? '0px': '2px' ) };
  font-weight: bold;
  margin-left:  ${(prop) => prop.type && '-10px' };
  margin-right: 12px;
`
const ColTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Profile = () => {
  
  const places = [
    { name : '구척돔', value: 0 },
    { name : '잠실구장', value: 1 },
    { name : '렌더스필드', value: 2 },
    { name : '사직구장', value: 3 },
    { name : '문수야구장', value: 4 },
    { name : 'NC파크', value: 5 },
    { name: '챔패언스필드', value: 6 },
    { name: '라이온즈 파크', value: 7 },
    { name: '위즈파크', value: 8 },
    { name: '이글스파크', value: 9 },
    { name: '청주구장', value: 10 },
    { name: '구장무관', value: 11, isSelect : true },
  ]

  const teams = [
    { name : 'LG', value: 0 },
    { name : 'KT', value: 1 },
    { name : 'SSG', value: 2 },
    { name : 'NC', value: 3 },
    { name : '두산', value: 4 },
    { name : 'KIA', value: 5 },
    { name: '롯데', value: 6 },
    { name: '삼성', value: 7 },
    { name: '한화', value: 8 },
    { name: '키움', value: 9 },
    { name: '팀무관', value: 10, isSelect : true },
  ]

  const CHEERING_STYLE = [
    { name : '응원가형', value: 0 },
    { name : '맥주형', value: 1 },
    { name : '분석형', value: 2 },
    { name : '먹방형', value: 3 },
  ]

  const [ id, setId ] = useState( '하이' )
  const [ nickName, setNickName ] = useState( '' )
  const [ selectTags, setSelectTags ] = useState([])

  return(
    <MainLayout title='프로필 설정'>
      <HomeLayout style={{ paddingTop: '30px' }}>
        <EssentialWrapper>
          <Title type = 'medium'>필수 정보</Title>
          <RowTagListWrapper>
            <TitleWrapper type = 'value'>
              <Title type='small'>아이디</Title>
            </TitleWrapper>
            <Title type='small'>{ id }</Title>
          </RowTagListWrapper>
          <RowTagListWrapper>
            <TitleWrapper type = 'input'>
              <Title type='small'>닉네임</Title>
            </TitleWrapper>
            <InputBox 
              value={ nickName } 
              placeholder = '닉네임을 입력하세요' 
              height = '40px' 
              width = '300px'
              checkMsg= '중복된 닉네임입니다.'
            />
          </RowTagListWrapper>
          <RowTagListWrapper>
            <TitleWrapper>
              <Title type='small'>선호 구장</Title>
            </TitleWrapper>
            <TagList tags = { places } />
          </RowTagListWrapper>
          <RowTagListWrapper>
            <TitleWrapper>
              <Title type='small'>팀선택<br/>(1개만 선택)</Title>
            </TitleWrapper>
            <TagList tags = { teams }/>
          </RowTagListWrapper>
        </EssentialWrapper>
        <EssentialWrapper>
          <Title type = 'medium'>직관 스타일</Title>
          <Title type = 'small' bold><br/>나의 직관 스타일을 나타낼 수 있는 태그를 선택해주세요.(최소 5개, 최대 15개)</Title>
          <TagList tags = { selectTags } bgColor='#FBD14B' isRemove/>
          <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>직관응원팀</Title>
            </ColTitleWrapper>
            <TagList tags = { teams }/>
          </ColTagListWrapper>
          <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>응원 유형</Title>
            </ColTitleWrapper>
            <TagList tags = { CHEERING_STYLE }/>
          </ColTagListWrapper>
          <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>선호 좌석</Title>
            </ColTitleWrapper>
            <TagList tags = { CHEERING_STYLE }/>
          </ColTagListWrapper>
          <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>MBTI</Title>
            </ColTitleWrapper>
            <TagList tags = { CHEERING_STYLE }/>
          </ColTagListWrapper>
          <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>시즌권 보유</Title>
            </ColTitleWrapper>
            <TagList tags = { CHEERING_STYLE }/>
          </ColTagListWrapper>
           <ColTagListWrapper>
            <ColTitleWrapper>
              <Title type='small'>기타</Title>
            </ColTitleWrapper>
            <TagList tags = { CHEERING_STYLE }/>
          </ColTagListWrapper>
        </EssentialWrapper>
      </HomeLayout>
    </MainLayout>
  )
}

export default Profile