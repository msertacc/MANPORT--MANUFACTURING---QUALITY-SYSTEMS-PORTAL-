package com.Manport.Backend.dto;

import com.Manport.Backend.domain.User;
import lombok.Data;

@Data
public class UserDTO {

    private String userName;
    public UserDTO(User user){
        this.setUserName(user.getUsername());
    }

}
