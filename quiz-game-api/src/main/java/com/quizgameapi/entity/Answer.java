package com.quizgameapi.entity;

import javax.persistence.*;

@Entity
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer id;

    public Integer is_correct;

    public String answer_text;

    public Integer question_id;


}
