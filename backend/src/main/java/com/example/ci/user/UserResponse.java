package com.example.ci.user;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserResponse {
    private String message;

    @Builder
    public UserResponse(String message) {
        this.message = message;
    }
}
