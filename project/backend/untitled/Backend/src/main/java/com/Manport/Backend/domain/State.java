package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name= "state")
public class State {

    @Id
    @Column(name="state_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long state_id;

    @Column(name="state_name")
    private String state_name;

    @OneToMany(orphanRemoval = true)
    @JsonIgnore
    @JoinColumn(name="state_id")
    private List<Job> jobs;

}
