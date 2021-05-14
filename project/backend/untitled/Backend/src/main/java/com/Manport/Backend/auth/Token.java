package com.Manport.Backend.auth;

import com.Manport.Backend.domain.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Token {
    @Id
    private String token;

    @ManyToOne
    private User user;
}
