import React, { useState } from "react";
import { View, Text, Image, Modal, Pressable } from "react-native";

import { Icon } from "native-base";
import styled from "styled-components";

const FeedBox = styled.View`
  flex: 1;
  margin-top: 30px;
  height: 400px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  /* align-items: center; */
  /* justify-content: center; */
`;

const FeedBoxHeader = styled.TouchableOpacity`
  flex: 0.9;
  justify-content: center;
  align-items: flex-end;
`;
const FeedImage = styled.View`
  flex: 5;
  /* background-color: yellow; */
`;
const FeedDate = styled.View`
  flex: 0.8;
  padding-top: 16px;
  padding-left: 16px;
  /* background-color: green; */
`;
const FeedContents = styled.View`
  flex: 1.5;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  /* background-color: grey; */
`;

// 피드 수정/삭제 모달 전체 컨테이너
const FeedSettingsModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 피드 수정/삭제 모달 박스
const FeedSettingsModalBox = styled.View`
  flex: 1;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 300px;
  margin-bottom: 300px;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

// 피드 수정/삭제 모달 헤더
const FeedSettingsModalHeader = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

// 피드 수정/삭제 모달 수정버튼
const FeedSettingsModalModify = styled.TouchableOpacity`
  flex: 1;
  background-color: #ededed;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;

// 피드 수정/삭제 모달 삭제 버튼
const FeedSettingsModalDelete = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.deleteRed};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;

// 피드 삭제 확인 모달 박스
const DeleteCheckModalBox = styled.View`
  flex: 1;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 300px;
  margin-bottom: 300px;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
`;

// 텍스트 넘칠 경우 처리 해줄 예정
const FeedContentsText = styled.Text``;

export default function Feed() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <FeedBox>
      {/* 피드 수정,삭제 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FeedSettingsModalContainer>
          <FeedSettingsModalBox>
            <FeedSettingsModalHeader>
              <Text>Settings</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
              </Pressable>
            </FeedSettingsModalHeader>
            <FeedSettingsModalModify style={{ marginBottom: 1 }}>
              <Text>피드 수정</Text>
            </FeedSettingsModalModify>
            <FeedSettingsModalDelete
              onPress={() => {
                setDeleteModalVisible(!deleteModalVisible);
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: "white" }}>피드 삭제</Text>
            </FeedSettingsModalDelete>
          </FeedSettingsModalBox>
        </FeedSettingsModalContainer>
      </Modal>
      {/* 삭제 확인 모달창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          setModalVisible(!deleteModalVisible);
        }}
      >
        <FeedSettingsModalContainer>
          <DeleteCheckModalBox>
            <FeedSettingsModalHeader>
              <Text>정말 삭제하시겠어요?</Text>
              {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon type="AntDesign" name="close" style={{ fontSize: 20 }} />
              </Pressable> */}
            </FeedSettingsModalHeader>
            <View style={{ flex: 0.4, flexDirection: "row" }}>
              <FeedSettingsModalDelete>
                <Text style={{ color: "white" }}>삭제</Text>
              </FeedSettingsModalDelete>
              <FeedSettingsModalModify
                onPress={() => {
                  setDeleteModalVisible(!deleteModalVisible);
                }}
              >
                <Text>취소</Text>
              </FeedSettingsModalModify>
            </View>
          </DeleteCheckModalBox>
        </FeedSettingsModalContainer>
      </Modal>

      <FeedBoxHeader onPress={() => setModalVisible(!modalVisible)}>
        <Icon type="MaterialCommunityIcons" name="dots-vertical" />
      </FeedBoxHeader>
      <FeedImage>
        <Image
          source={{
            uri:
              "http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg",
          }}
          style={{ flex: 1 }}
        />
      </FeedImage>
      <FeedDate>
        <Text>2021.04.06 16:15</Text>
      </FeedDate>
      <FeedContents>
        <FeedContentsText>
          오늘은 스투키를 데려온지 10일째다. 그냥 귀여워서 찍어봤다! 스투키는 늘
          귀여워 새로워 짜릿해
        </FeedContentsText>
      </FeedContents>
    </FeedBox>
  );
}
