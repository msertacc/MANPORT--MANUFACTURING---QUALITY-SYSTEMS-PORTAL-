package com.Manport.Backend.auth;

import com.Manport.Backend.dao.UserRepository;
import com.Manport.Backend.domain.User;
import com.Manport.Backend.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/1.0")
@CrossOrigin(origins="http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/auth")
    AuthResponse handleAuthentication(@RequestBody Credentials credentials) throws Exception {
        return authService.authenticate(credentials);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/deneme")
    GenericResponse getUser(@RequestBody Credentials credentials) {
        User user;

                user = userRepository.findByUsername(credentials.getUsername());
        if(user != null){
            return new GenericResponse("user found");
        }
        else{
            return new GenericResponse("user not found");
        }
    }

    @PostMapping("/logout")
    GenericResponse handleLogout(@RequestHeader(name = "Authorization") String authorization) {
        String token = authorization.substring(7);
        authService.clearToken(token);
        return new GenericResponse("Logout success");
    }


}
