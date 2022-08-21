package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Chat;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface ChatRepository extends CrudRepository< Chat , BigInteger > {
}
