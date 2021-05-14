package com.Manport.Backend.resource;

import com.Manport.Backend.domain.Server;
import com.Manport.Backend.service.ServerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/1.0")
@CrossOrigin(origins="http://localhost:3000")
public class ServerController {

        @Autowired
        private ServerServiceImpl serverService;

        @GetMapping("/servers")
        List<Server> getServers(){
            return serverService.getAll();
        }

        @GetMapping("/countcountry/{id}")
        Integer countCountry(@PathVariable Long id){
                return serverService.getCountCountry(id);
        }



}
