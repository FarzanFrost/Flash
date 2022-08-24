package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

public interface LoginRepository extends JpaRepository< Login, String > {

    @Override
    List<Login> findAll();

    @Override
    Optional<Login> findById( String Email );

    @Modifying
    @Query( value = "INSERT INTO Login ( Email , Password , Saltkey, CustomerID , EmployeeID , DateTime ) VALUES ( :email , :password , :saltkey ,:customerID , :employeeID, :dateTime );" ,  nativeQuery = true)
    @Transactional
    void insertIntoLogin(@Param("email") String email , @Param("password") String password , @Param("saltkey") String saltkey , @Param("customerID")BigInteger customerID , @Param("employeeID")BigInteger employeeID,@Param("dateTime") Timestamp dateTime);

}
