package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name= "job")
public class Job {

    @Id
    @Column(name="job_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long job_id;

    @Column(name="job_name")
    private String job_name;

    @Column(name="job_description")
    private String job_description;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "job_created")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd-MM-yyyy HH:mm")
    private Date job_created;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "job_updated")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="dd-MM-yyyy HH:mm")
    private Date job_updated;

    @Column(name ="job_status")
    private Boolean job_status;

    @ManyToOne
    @JoinColumn(name="server_id")
    private Server server;

    @ManyToOne
    @JoinColumn(name="state_id")
    private State state;

}
