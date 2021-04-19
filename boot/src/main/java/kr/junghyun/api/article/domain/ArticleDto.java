package kr.junghyun.api.article.domain;

import lombok.Data;
import lombok.Setter;
import lombok.extern.apachecommons.CommonsLog;
import org.springframework.stereotype.Component;

import javax.persistence.Column;

@Data
@Component
public class ArticleDto {

    private long articleId;
    private String writer;
    private String email;
    private String subject;
    private String content;
    private String rdate;

    public void setWriter(String writer){
        this.writer = writer;
    }

    public String getWriter(){
        return this.writer;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail(){
        return this.email;
    }

    public void setSubject(String subject){
        this.subject = subject;
    }

    public String getSubject(){
        return this.subject;
    }

    public void setContent(String content){
        this.content = content;
    }

    public String getContent(){
        return this.content;
    }

    public void setRdate(String rdate){
        this.rdate = rdate;
    }

    public String getRdate(){
        return this.rdate;
    }

    public String toString(){
        return "email: " + this.email + ", writer: " + this.writer;
    }
}
