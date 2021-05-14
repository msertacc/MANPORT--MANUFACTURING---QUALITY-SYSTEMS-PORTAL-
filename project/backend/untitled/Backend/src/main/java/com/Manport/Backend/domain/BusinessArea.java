package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name= "businessarea")
public class BusinessArea {

    @Id
    @Column(name="businessarea_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long businessarea_id;

    @Column(name="businessarea_name")
    private String businessarea_name;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="businessarea_id")
    private List<Application> apps;

}
