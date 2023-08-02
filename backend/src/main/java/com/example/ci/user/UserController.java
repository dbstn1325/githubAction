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
        return new UserResponse("홍삼보다십삼조!");
    }

    @PostMapping("/create")
    public UserResponse createUser(){
        return new UserResponse("hello cd");
    }

}
