```php
<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

<section class="contact-page">

    <div class="container">

        <div class="contact-header">

            <span class="contact-badge">
                Contáctanos
            </span>

            <h1>
                Hablemos sobre tu próximo proyecto
            </h1>

            <p>
                Estamos listos para ayudarte a transformar
                tu empresa mediante tecnología, automatización
                e inteligencia de negocio.
            </p>

        </div>

        <div class="contact-grid">

            <!-- INFORMACION -->

            <div class="contact-info">

                <div class="info-card">

                    <i class="fa-solid fa-location-dot"></i>

                    <div>

                        <h3>Ubicación</h3>

                        <p>
                            Av. Prolong. Paseo La Castellana Nro. 180-A , Santiago De Surco, Lima – Perú 
                        </p>

                    </div>

                </div>

                <div class="info-card">

                    <i class="fa-solid fa-phone"></i>

                    <div>

                        <h3>Teléfono</h3>

                        <p>
                          +51 954 385 661
                            
                        </p>
                        <p>
                          +51 964 231 361
                        </p>

                    </div>

                </div>

                <div class="info-card">

                    <i class="fa-solid fa-envelope"></i>

                    <div>

                        <h3>Correo</h3>

                        <p>
                            ventas@nexitcore.com
                        </p>

                    </div>

                </div>

                <div class="info-card">

                    <i class="fa-solid fa-clock"></i>

                    <div>

                        <h3>Horario</h3>

                        <p>
                            Lunes a Viernes
                            <br>
                            08:00 AM - 06:00 PM
                        </p>

                    </div>

                </div>

            </div>

            <!-- FORMULARIO -->

            <div class="contact-form-container">

                <form id="contactForm">

                    <div class="form-group">

                        <label>
                            Nombre Completo
                        </label>

                        <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            required>

                    </div>

                    <div class="form-group">

                        <label>
                            Correo Electrónico
                        </label>

                        <input
                            type="email"
                            placeholder="correo@empresa.com"
                            required>

                    </div>

                    <div class="form-group">

                        <label>
                            Empresa
                        </label>

                        <input
                            type="text"
                            placeholder="Nombre de la empresa">

                    </div>

                    <div class="form-group">

                        <label>
                            Servicio de Interés
                        </label>

                        <select required>

                            <option value="">
                                Seleccione
                            </option>

                            <option>
                                Desarrollo Web
                            </option>

                            <option>
                                Aplicaciones Móviles
                            </option>

                            <option>
                                Business Intelligence
                            </option>

                            <option>
                                Automatización
                            </option>

                            <option>
                                Consultoría TI
                            </option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>
                            Mensaje
                        </label>

                        <textarea
                            rows="6"
                            placeholder="Describe tu proyecto..."
                            required></textarea>

                    </div>

                    <button
                        type="submit"
                        class="btn-green">

                        Enviar Consulta

                    </button>

                </form>

            </div>

        </div>

    </div>

</section>

<a
href="https://wa.me/51954685661"
target="_blank"
class="whatsapp">

<i class="fab fa-whatsapp"></i>

</a>

<button id="topBtn">

<i class="fa-solid fa-arrow-up"></i>

</button>

<?php include 'includes/footer.php'; ?>
```
