package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@Table(name="responsibleteam")
public class ResponsibleTeam {

    @Id
    @Column(name="responsibleteam_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long responsibleteam_id;

    @Column(name="responsibleteam_name")
    private String responsibleteam_name;

    @ManyToOne
    @JoinColumn(name= "person_id")
    private Person person;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="responsibleteam_id")
    private List<Application> apps;

}
