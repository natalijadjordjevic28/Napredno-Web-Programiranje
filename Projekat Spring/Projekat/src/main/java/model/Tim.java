package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;


/**
 * The persistent class for the tim database table.
 * 
 */
@Entity
@NamedQuery(name="Tim.findAll", query="SELECT t FROM Tim t")
public class Tim implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idTima;

	private String imeTIma;

	private String imeTrenera;

	private String logoTima;

	//bi-directional many-to-one association to Igrac
	@OneToMany(mappedBy="tim")
	@JsonIgnore
	private List<Igrac> igracs;

	//bi-directional many-to-one association to Utakmica
	@OneToMany(mappedBy="tim1")
	@JsonIgnore
	private List<Utakmica> utakmicas1;

	//bi-directional many-to-one association to Utakmica
	@OneToMany(mappedBy="tim2")
	@JsonIgnore
	private List<Utakmica> utakmicas2;

	public Tim() {
	}

	public int getIdTima() {
		return this.idTima;
	}

	public void setIdTima(int idTima) {
		this.idTima = idTima;
	}

	public String getImeTIma() {
		return this.imeTIma;
	}

	public void setImeTIma(String imeTIma) {
		this.imeTIma = imeTIma;
	}

	public String getImeTrenera() {
		return this.imeTrenera;
	}

	public void setImeTrenera(String imeTrenera) {
		this.imeTrenera = imeTrenera;
	}

	public String getLogoTima() {
		return this.logoTima;
	}

	public void setLogoTima(String logoTima) {
		this.logoTima = logoTima;
	}

	public List<Igrac> getIgracs() {
		return this.igracs;
	}

	public void setIgracs(List<Igrac> igracs) {
		this.igracs = igracs;
	}

	public Igrac addIgrac(Igrac igrac) {
		getIgracs().add(igrac);
		igrac.setTim(this);

		return igrac;
	}

	public Igrac removeIgrac(Igrac igrac) {
		getIgracs().remove(igrac);
		igrac.setTim(null);

		return igrac;
	}

	public List<Utakmica> getUtakmicas1() {
		return this.utakmicas1;
	}

	public void setUtakmicas1(List<Utakmica> utakmicas1) {
		this.utakmicas1 = utakmicas1;
	}

	public Utakmica addUtakmicas1(Utakmica utakmicas1) {
		getUtakmicas1().add(utakmicas1);
		utakmicas1.setTim1(this);

		return utakmicas1;
	}

	public Utakmica removeUtakmicas1(Utakmica utakmicas1) {
		getUtakmicas1().remove(utakmicas1);
		utakmicas1.setTim1(null);

		return utakmicas1;
	}

	public List<Utakmica> getUtakmicas2() {
		return this.utakmicas2;
	}

	public void setUtakmicas2(List<Utakmica> utakmicas2) {
		this.utakmicas2 = utakmicas2;
	}

	public Utakmica addUtakmicas2(Utakmica utakmicas2) {
		getUtakmicas2().add(utakmicas2);
		utakmicas2.setTim2(this);

		return utakmicas2;
	}

	public Utakmica removeUtakmicas2(Utakmica utakmicas2) {
		getUtakmicas2().remove(utakmicas2);
		utakmicas2.setTim2(null);

		return utakmicas2;
	}

}