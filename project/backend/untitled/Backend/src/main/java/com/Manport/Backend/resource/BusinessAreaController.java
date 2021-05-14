package com.Manport.Backend.resource;

import com.Manport.Backend.domain.BusinessArea;
import com.Manport.Backend.service.BusinessAreaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/1.0")
public class BusinessAreaController {

    @Autowired
    private BusinessAreaServiceImpl businessAreaService;

    @GetMapping("/businessareas")
    public List<BusinessArea> getAreas(){
        return businessAreaService.getAreas();
    }
}
