package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "backend")
public class Backend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="backend_id")
    private Long backend_id;

    @Column(name="backend_name")
    private String backend_name;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="backend_id")
    private List<Application> apps;

}
