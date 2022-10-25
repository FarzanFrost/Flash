package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Event;
import com.example.flashbackend.Entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

public interface PackageRepository extends JpaRepository<Package , BigInteger> {

    @Override
    List<Package> findAll();

    Package findByEvents(List<Event> events);

    @Modifying
    @Query( value = "UPDATE package SET Frame = :frame , Videographer = :videographer, Photographer = :photographer, Calender = :calender, Name = :name,  Pages = :pages, ExtraPagePrice = :extraPagePrice, OutshootType = :outshootType, SignatureFrame = :signatureFrame, AlbumDesign = :albumDesign, TotalPayment = :totalPayment,  EventType = :eventType, Additional = :additional WHERE PackageID = :packageId;" , nativeQuery = true)
    @Transactional
    void update(@Param( "frame" ) String fram , @Param( "videographer" ) int videographer , @Param( "photographer" ) int photographer , @Param( "calender" ) boolean calender , @Param( "name" ) String name , @Param( "pages" ) int pages , @Param( "extraPagePrice" ) float extraPagePrice , @Param( "outshootType" ) String outshootType , @Param( "signatureFrame" ) boolean signatureFrame , @Param( "albumDesign" ) String albumDesign , @Param( "totalPayment" ) float totalPayment , @Param( "eventType" ) String eventType , @Param( "additional" ) String additional , @Param( "packageId" ) BigInteger packageId );

}
