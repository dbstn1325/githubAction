package com.example.ci.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class UserController {

    @GetMapping("/")
    public UserResponse getUser(){
        return new UserResponse("hello ci-3");
    }

    @PostMapping("/create")
    public UserResponse createUser(){
        return new UserResponse("유저를 생성하였습니다.-4");
    }
}
