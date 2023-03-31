--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: komponen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.komponen (
    id_komponen character(36) NOT NULL,
    nama_komponen character varying(255) NOT NULL,
    deskripsi text NOT NULL
);


ALTER TABLE public.komponen OWNER TO postgres;

--
-- Name: komponen_pemasok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.komponen_pemasok (
    id_komponen_pemasok character(36) NOT NULL,
    id_komponen character(36) NOT NULL,
    id_pemasok character(36) NOT NULL
);


ALTER TABLE public.komponen_pemasok OWNER TO postgres;

--
-- Name: pemasok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pemasok (
    id_pemasok character(36) NOT NULL,
    nama_pemasok character varying(255) NOT NULL,
    alamat_pemasok text NOT NULL,
    telepon character varying(255) NOT NULL
);


ALTER TABLE public.pemasok OWNER TO postgres;

--
-- Name: produk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produk (
    id_product character(36) NOT NULL,
    nama_produk character varying(255) NOT NULL,
    kuantitas integer NOT NULL,
    id_komponen character(36) NOT NULL
);


ALTER TABLE public.produk OWNER TO postgres;

--
-- Data for Name: komponen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.komponen (id_komponen, nama_komponen, deskripsi) FROM stdin;
\.


--
-- Data for Name: komponen_pemasok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.komponen_pemasok (id_komponen_pemasok, id_komponen, id_pemasok) FROM stdin;
\.


--
-- Data for Name: pemasok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pemasok (id_pemasok, nama_pemasok, alamat_pemasok, telepon) FROM stdin;
\.


--
-- Data for Name: produk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produk (id_product, nama_produk, kuantitas, id_komponen) FROM stdin;
\.


--
-- Name: komponen_pemasok komponen_pemasok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT komponen_pemasok_pkey PRIMARY KEY (id_komponen_pemasok);


--
-- Name: komponen komponen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen
    ADD CONSTRAINT komponen_pkey PRIMARY KEY (id_komponen);


--
-- Name: pemasok pemasok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pemasok
    ADD CONSTRAINT pemasok_pkey PRIMARY KEY (id_pemasok);


--
-- Name: produk produk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk
    ADD CONSTRAINT produk_pkey PRIMARY KEY (id_product);


--
-- Name: komponen_pemasok komponen_pemasok_id_komponen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT komponen_pemasok_id_komponen_fkey FOREIGN KEY (id_komponen) REFERENCES public.komponen(id_komponen);


--
-- Name: komponen_pemasok komponen_pemasok_id_pemasok_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT komponen_pemasok_id_pemasok_fkey FOREIGN KEY (id_pemasok) REFERENCES public.pemasok(id_pemasok);


--
-- Name: produk produk_id_komponen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk
    ADD CONSTRAINT produk_id_komponen_fkey FOREIGN KEY (id_komponen) REFERENCES public.komponen(id_komponen);


--
-- PostgreSQL database dump complete
--

