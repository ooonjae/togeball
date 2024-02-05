package com.ssafy.togeball.domain.chatroom.service;

import com.ssafy.togeball.domain.chatroom.dto.*;
import com.ssafy.togeball.domain.chatroom.entity.*;
import com.ssafy.togeball.domain.chatroom.repository.ChatroomMembershipRepository;
import com.ssafy.togeball.domain.chatroom.repository.ChatroomRepository;
import com.ssafy.togeball.domain.user.dto.UserResponse;
import com.ssafy.togeball.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChatroomService {

    private final ChatroomRepository chatroomRepository;
    private final ChatroomMembershipRepository chatroomMembershipRepository;

    public Chatroom getTestChatroom() {
        return chatroomRepository.findById(1).orElseThrow();
    }

    @Transactional(readOnly = true)
    public List<UserResponse> findParticipantsByChatroomId(Integer chatroomId) {
        List<User> participants =  chatroomRepository.findParticipantsByChatroomId(chatroomId);
        return participants.stream().map(UserResponse::of).toList();
    }

    @Transactional(readOnly = true)
    public ChatroomResponse findChatroomById(Integer chatroomId) {
        Optional<Chatroom> optional = chatroomRepository.findById(chatroomId);
        if (optional.isEmpty()) {
            return null;
        }
        Chatroom chatroom = optional.get();
        return convertChatroomResponse(chatroom);
    }



    @Transactional(readOnly = true)
    public Page<ChatroomResponse> findChatroomsByUserId(Integer userId, Pageable pageable) {
        Page<Chatroom> chatrooms = chatroomRepository.findChatroomsByUserId(userId, pageable);
        return getChatroomResponses(chatrooms);
    }


    @Transactional(readOnly = true)
    public Page<RecruitChatroomResponse> findRecruitChatroomsByCondition(RecruitChatroomSearchCondition condition, Pageable pageable) {
        Page<RecruitChatroom> chatrooms = chatroomRepository.findRecruitChatroomsByCondition(condition, pageable);
        return chatrooms.map(RecruitChatroomResponse::of);
    }

    @Transactional
    public Integer createRecruitChatroom(RecruitChatroomRequest chatroomDto) {
        return chatroomRepository.createRecruitChatroom(chatroomDto).getId();
    }

    @Transactional
    public RecruitChatroomResponse updateRecruitChatroom(RecruitChatroomRequest chatroomDto) {
        RecruitChatroom recruitChatroom = chatroomRepository.updateRecruitChatroom(chatroomDto);
        return RecruitChatroomResponse.of(recruitChatroom);
    }

    @Transactional
    public void deleteChatroom(Integer chatroomId) {
        chatroomRepository.deleteById(chatroomId);
    }

    @Transactional
    public boolean joinChatroom(Integer userId, Integer chatroomId) {

        if (chatroomRepository.findCapacityById(chatroomId) > chatroomMembershipRepository.countByChatroomId(chatroomId)) {
            return false;
        }
        return chatroomRepository.addParticipant(chatroomId, userId);
    }

    @Transactional
    public void leaveChatroom(Integer userId, Integer chatroomId) {
        ChatroomMembership membership = chatroomMembershipRepository
                .findByUserIdAndChatroomId(userId, chatroomId).orElseThrow();
        chatroomMembershipRepository.delete(membership);
    }

    public Page<ChatroomResponse> findAllChatroomsByType(String type, Pageable pageable) {
        Page<Chatroom> chatrooms = chatroomRepository.findAllByType(type, pageable);
        return getChatroomResponses(chatrooms);
    }

    public Page<RecruitChatroomResponse> findAllRecruitChatroomsByManagerId(Integer managerId, Pageable pageable) {
        Page<RecruitChatroom> chatrooms = chatroomRepository.findRecruitChatroomsByManagerId(managerId, pageable);
        return chatrooms.map(RecruitChatroomResponse::of);
    }

    private ChatroomResponse convertChatroomResponse(Chatroom chatroom) {
        if (chatroom instanceof RecruitChatroom) {
            return RecruitChatroomResponse.of((RecruitChatroom) chatroom);
        } else if (chatroom instanceof GameChatroom) {
            return GameChatroomResponse.of((GameChatroom) chatroom);
        } else if (chatroom instanceof MatchingChatroom) {
            return MatchingChatroomResponse.of((MatchingChatroom) chatroom);
        }

        return null;
    }

    private Page<ChatroomResponse> getChatroomResponses(Page<Chatroom> chatrooms) {
        Page<ChatroomResponse> page = chatrooms.map(this::convertChatroomResponse);
        return page;
    }
}