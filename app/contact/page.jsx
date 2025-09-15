import Link from "next/link";
export default function Contact() {
  return (
    <>
      <main className="mb-14">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mb-14 lg:mb-[4.75rem] pb-14 lg:pb-[5.5rem] border-b border-solid border-white border-opacity-20">
            <div className="lg:flex items-start justify-between">
              <div className="lg:w-1/2">
                <div className="lg:max-w-[25.25rem] mb-12 lg:mb-24">
                  <h1 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
                    Säg hej!
                  </h1>

                  <div className="prose text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                    Välkommen att höra av dig till oss på Pigment Webbyrå i
                    Stockholm.
                  </div>
                </div>

                <div className="flex flex-row flex-wrap gap-y-8 gap-x-[5.25rem] md:gap-x-[7.25rem] mb-20 lg:mb-0">
                  <div>
                    <h3 className="mb-[0.875rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                      Kontakt
                    </h3>
                    <p>
                      <Link
                        className="inline-block"
                        href="mailto:info@pigment.se"
                      >
                        info@pigment.se
                      </Link>
                    </p>
                    <p>
                      <Link className="inline-block" href="tel:+46709535399">
                        +46 70 953 53 99
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-[0.875rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                      Ny förfrågan
                    </h3>
                    <p>
                      <Link href="mailto:sales@pigment.se">
                        sales@pigment.se
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-[0.875rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                      Supportärenden
                    </h3>
                    <p>
                      <Link href="mailto:support@pigment.se">
                        support@pigment.se
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div>
                  <div className="js-form-heading">
                    <h3 className="mb-[2.375rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                      Kontaktformulär
                    </h3>
                  </div>
                  {/* <!-- gravity form  --> */}
                  <div className="py-16 max-w-[30rem]">
                    <div
                      className="gf_browser_unknown gform_wrapper gform-theme gform-theme--foundation gform-theme--framework gform-theme--orbital"
                      data-form-theme="orbital"
                      data-form-index="0"
                      id="gform_wrapper_1"
                    >
                      <form
                        method="post"
                        id="gform_1"
                        action="#"
                        data-formid="1"
                      >
                        <div className="gform-body gform_body">
                          <div
                            id="gform_fields_1"
                            className="gform_fields top_label form_sublabel_below description_below validation_below"
                          >
                            <div
                              id="field_1_1"
                              className="gfield gfield--type-text gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <label
                                className="gfield_label gform-field-label"
                                htmlFor="input_1_1"
                              >
                                First name
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </label>
                              <div className="ginput_container ginput_container_text">
                                <input
                                  name="input_1"
                                  id="input_1_1"
                                  type="text"
                                  className="large"
                                  placeholder="Förnamn"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                            </div>
                            <div
                              id="field_1_3"
                              className="gfield gfield--type-text gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <label
                                className="gfield_label gform-field-label"
                                htmlFor="input_1_3"
                              >
                                Last name
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </label>
                              <div className="ginput_container ginput_container_text">
                                <input
                                  name="input_3"
                                  id="input_1_3"
                                  type="text"
                                  className="large"
                                  placeholder="Efternamn"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                            </div>
                            <div
                              id="field_1_4"
                              className="gfield gfield--type-email gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <label
                                className="gfield_label gform-field-label"
                                htmlFor="input_1_4"
                              >
                                E-mail
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </label>
                              <div className="ginput_container ginput_container_email">
                                <input
                                  name="input_4"
                                  id="input_1_4"
                                  type="email"
                                  className="large"
                                  placeholder="E-post"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                            </div>
                            <div
                              id="field_1_5"
                              className="gfield gfield--type-phone gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <label
                                className="gfield_label gform-field-label"
                                htmlFor="input_1_5"
                              >
                                Mobile
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </label>
                              <div className="ginput_container ginput_container_phone">
                                <input
                                  name="input_5"
                                  id="input_1_5"
                                  type="tel"
                                  className="large"
                                  placeholder="Telefon"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </div>
                            </div>
                            <div
                              id="field_1_6"
                              className="gfield gfield--type-textarea gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <label
                                className="gfield_label gform-field-label"
                                htmlFor="input_1_6"
                              >
                                Meddelande
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </label>
                              <div className="ginput_container ginput_container_textarea">
                                <textarea
                                  name="input_6"
                                  id="input_1_6"
                                  className="textarea large"
                                  aria-required="true"
                                  aria-invalid="false"
                                  rows="10"
                                  cols="50"
                                ></textarea>
                              </div>
                            </div>
                            <fieldset
                              id="field_1_7"
                              className="gfield gfield--type-consent gfield--type-choice legend-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                            >
                              <legend className="gfield_label gform-field-label gfield_label_before_complex">
                                Consent
                                <span className="gfield_required">
                                  <span className="gfield_required gfield_required_text">
                                    (Obligatoriskt)
                                  </span>
                                </span>
                              </legend>
                              <div className="ginput_container ginput_container_consent">
                                <input
                                  name="input_7.1"
                                  id="input_1_7_1"
                                  type="checkbox"
                                  value="1"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                                <label
                                  className="gform-field-label gform-field-label--type-inline gfield_consent_label"
                                  htmlFor="input_1_7_1"
                                >
                                  Jag har tagit del av Pigments
                                  <Link
                                    className="underline"
                                    href="../integritetspolicy/index.html"
                                  >
                                    integritetspolicy.
                                  </Link>
                                </label>
                                <input type="hidden" name="input_7.2" />

                                <input
                                  type="hidden"
                                  name="input_7.3"
                                  value="1"
                                  className="gform_hidden"
                                />
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-12 lg:mb-[4.25rem] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Våra kontor
            </h2>
            <div className="md:flex items-start justify-between md:gap-x-8">
              <div className="flex flex-row flex-wrap gap-y-16 mb-16 md:mb-0 w-full">
                <div className="w-1/2 lg:w-1/4">
                  <h3 className="mb-[0.4375rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-malibu">
                    Stockholm
                  </h3>
                  <p>Götgatan 60</p>
                  <p>118 26 Stockholm</p>
                  <Link href="tel:+46709535399">+46 70 953 53 99</Link>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <h3 className="mb-[0.4375rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-malibu">
                    Kathmandu
                  </h3>
                  <p>Thamel, Chaksibari Marg</p>
                  <p>44600, Kathmandu</p>
                  <Link href="tel:+9779851353274">+977 9851353274</Link>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <h3 className="mb-[0.4375rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-malibu">
                    Dalarna
                  </h3>
                  <Link href="mailto:info@pigment.se">info@pigment.se</Link>
                  <br />
                  <Link href="tel:+4676-0308724">+46 76-160 35 42</Link>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <h3 className="mb-[0.4375rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-malibu">
                    Norrköping
                  </h3>
                  <Link href="mailto:info@pigment.se">info@pigment.se</Link>
                  <br />
                  <Link href="tel:+46760308724">+46 76-030 87 24</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
