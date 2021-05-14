package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name= "person")
public class Person {

    @Id
    @Column(name="person_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long person_id;

    @Column(name="person_name")
    private String person_name;

    @Column(name="person_surname")
    private String person_surname;

    @Column(name="person_email")
    @Email
    private String person_email;

    @Column(name="person_DOB")
    private Date person_DOB;

    @Column(name="person_phoneno")
    private String person_phoneno;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinColumn(name="person_id")
    private List<User> user = new ArrayList<>();

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="person_id")
    private List<ResponsibleTeam> rteam;

}
