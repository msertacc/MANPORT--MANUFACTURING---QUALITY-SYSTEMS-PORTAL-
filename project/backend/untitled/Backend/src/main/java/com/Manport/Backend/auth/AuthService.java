package com.Manport.Backend.auth;

import com.Manport.Backend.dao.UserRepository;
import com.Manport.Backend.domain.User;
import com.Manport.Backend.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {

    UserRepository userRepository;

    PasswordEncoder passwordEncoder;

    TokenRepository tokenRepository;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenRepository tokenRepository) {
        super();
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenRepository = tokenRepository;
    }

    public AuthResponse authenticate(Credentials credentials) {
        User userC = userRepository.findByUsername(credentials.getUsername());

        if(userC == null){
            throw new AuthException("Username or password is incorrect");
        }
        //boolean matches = passwordEncoder.matches(credentials.getPassword(), userC.getPassword());
        if(!credentials.getPassword().equals(userC.getPassword())){
            throw new AuthException("Password error");
        }
        UserDTO userDTO = new UserDTO(userC);
        //String token = generateRandomToken();
        //Token tokenE = new Token();
        //tokenE.setToken(token);
        //tokenE.setUser(userC);
        //tokenRepository.save(tokenE);
        AuthResponse response = new AuthResponse();
        response.setUser(userDTO);
        //response.setToken(token);
        return response;
    }

    public void clearToken(String token) {
        tokenRepository.deleteById(token);
    }

    public String generateRandomToken() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    @Transactional
    public UserDetails getUserDetails(String token) {
        Optional<Token> optionalToken = tokenRepository.findById(token);
        if(!optionalToken.isPresent()) {
            return null;
        }
        return optionalToken.get().getUser();
    }
}
