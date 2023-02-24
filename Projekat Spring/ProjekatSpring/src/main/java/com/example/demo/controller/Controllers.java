package com.example.demo.controller;



import java.util.List;

//import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

//import java.util.ArrayList;

//import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.function.EntityResponse;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.classes.Response;
import com.example.demo.repository.IgracRepository;
import com.example.demo.repository.KorisnikRepository;
import com.example.demo.repository.TimRepository;
import com.example.demo.repository.UlogaRepository;
import com.example.demo.repository.UtakmicaRepository;
import com.example.demo.repository.VestiRepository;

import model.Igrac;
import model.Korisnik;
import model.Tim;
import model.Utakmica;
import model.Vesti;

@Controller
@RequestMapping(value = "/api/")
public class Controllers  {

	@Autowired
	KorisnikRepository kr;
	@Autowired
	UlogaRepository ul;
	
	@Autowired
	UtakmicaRepository ur;
	
	@Autowired
	TimRepository tr;
	
	@Autowired
	VestiRepository vr;
	
	@Autowired
	IgracRepository ir;
	

	@PostMapping(value = "login")
	public ResponseEntity<Response> login(@RequestParam(name = "email") String email,
			@RequestParam(name = "sifra") String sifra) {
		
		
          Response response = new Response();
		
		if (kr.findByEmail(email) != null) {
			if (kr.findByEmail(email).getSifra().equals(sifra)) {
				response.setEmail(email);
				response.setIdUloga(kr.findByEmail(email).getUloga().getIdUloga());
				response.setImeKorisnika(kr.findByEmail(email).getImeKorisnika());
				System.out.println(response.getEmail());
				System.out.println(response.getIdUloga());
				System.out.println(response.getImeKorisnika());
			}
		}
	return new ResponseEntity<Response>(response, HttpStatus.OK);

}
	

	@PostMapping(value = "register")
	public ResponseEntity<Boolean> saveKorisnik(@RequestParam(name = "imeKorisnika") String imeKorisnika,
			@RequestParam(name = "email") String email, @RequestParam(name = "sifra") String sifra) {
		Korisnik kor = kr.findByImeKorisnika(imeKorisnika);

		if (kor != null) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		Korisnik k = new Korisnik();
		k.setImeKorisnika(imeKorisnika);
		k.setEmail(email);
		k.setSifra(sifra);
		k.setUloga(ul.findById(1).get());

		kr.save(k);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);

	}
	@GetMapping(value = "getUtakmice")
	public ResponseEntity<List<Utakmica>> getUtakmice() {
		System.out.println("Lista utakmica");
		return new ResponseEntity<List<Utakmica>>(ur.findAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "getVesti", method=RequestMethod.GET)
	public ResponseEntity<List<Vesti>> getVesti() {
		return new ResponseEntity<List<Vesti>>(vr.findAll(), HttpStatus.OK);
	}
	
	
	
	@PostMapping(value = "addVesti")
	public ResponseEntity<Vesti> addVesti(@RequestParam(name = "email") String email, @RequestParam(name = "slikaVest") String slikaVest,@RequestParam(name = "opis") String opis ) {
		System.out.println(email);
		Vesti vesti = new Vesti();
		Korisnik k = kr.findByEmail(email);
		vesti.setOpis(opis);
		vesti.setSlikaVest(slikaVest);
		vesti.setKorisnik(k);
		vr.save(vesti);
		return new ResponseEntity<Vesti>(vesti, HttpStatus.OK);
	}
	
	@PostMapping(value = "deleteVesti")
	public ResponseEntity<Boolean> deleteVesti(@RequestParam(name = "idVesti") Integer idVesti) {
		Vesti vest = vr.findById(idVesti).get();
		System.out.println(vest.getOpis());
		vr.delete(vest);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@GetMapping(value = "getTimovi")
	public ResponseEntity<List<Tim>> getTimovi() {
		System.out.println("Lista timova");
		return new ResponseEntity<List<Tim>>(tr.findAll(), HttpStatus.OK);
	}
	
	@PostMapping(value = "addTim")
	public ResponseEntity<Tim> addTim(@RequestParam(name = "imeTIma") String imeTIma, @RequestParam(name = "logoTima") String logoTima,@RequestParam(name = "imeTrenera") String imeTrenera ) {
		Tim tim= new Tim();	
		tim.setImeTIma(imeTIma);
		tim.setLogoTima(logoTima);
		tim.setImeTrenera(imeTrenera);
		tr.save(tim);
		return new ResponseEntity<Tim>(tim, HttpStatus.OK);
	}

	@GetMapping(value = "igraciTima")
	public ResponseEntity<List<Igrac>> getIgraci() {
		return new ResponseEntity<List<Igrac>>(ir.findAll(), HttpStatus.OK);
	}
	
	@GetMapping(value = "igraciZaTim/{idTima}")
	public ResponseEntity<List<Igrac>> igraciZaTima(@PathVariable Integer idTima) {
		Tim t=tr.getById(idTima);
		List<Igrac> igraci = ir.findByTim(t);
		return new ResponseEntity<List<Igrac>>(igraci, HttpStatus.OK);

	}
	
//	@GetMapping(value="getTimZaUtakmicu")
//	public ResponseEntity<List<Utakmica>> timZaUtakmicu(@RequestParam(name="idTIma") Integer idTIma) {
//		Tim t= tr.findById(idTIma).get();
//		List<Utakmica> utakmica = ur.findByTim(t);
//		return new ResponseEntity<List<Utakmica>>(utakmica, HttpStatus.OK);
//
//	}
	@GetMapping(value="tim-za-utakmicu/{idUtakmice}")
	public ResponseEntity<Tim> vratiTim(@PathVariable Integer idUtakmice){
		Utakmica utakmica= ur.findById(idUtakmice).get();
		Tim tim1= utakmica.getTim1();
	//	Tim tim2= utakmica.getTim2();
		
		
//		
//		Knjiga knjiga = knjigaRep.findById(idKnjiga).get();
//		Izdavac izdavacKnjige = knjiga.getIzdavac();
		return new ResponseEntity<Tim>(tim1, HttpStatus.OK);
	}
	

}
