package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="frontend")
@Data
public class Frontend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="frontend_id")
    private Long frontend_id;

    @Column(name="frontend_name")
    private String frontend_name;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="frontend_id")
    private List<Application> apps;
}
