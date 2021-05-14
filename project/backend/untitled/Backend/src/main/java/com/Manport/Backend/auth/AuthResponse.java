package com.Manport.Backend.auth;

import com.Manport.Backend.dto.UserDTO;
import lombok.Data;

@Data
public class AuthResponse {

    private String token;
    private UserDTO user;

}
