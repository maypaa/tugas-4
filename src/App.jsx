import Charge from "./components/Charge";

const App = () => {
  const charger = [
    {
      name: "Anngker PowerPort",
      pict: "https://1.bp.blogspot.com/-ZWIkEbQPx8Q/XpPyGRQ8bZI/AAAAAAAAEvs/o24vVN4PnuIPVERLdI2Wd-93RbJnU1bGQCLcBGAsYHQ/s1600/Anker-PowerPort-6-Test-12.jpg",
      desk: "Anker PowerPort+ 6. Anker PowerPort+ 6 Quick Charge 3.0 hadir dengan enak port pengisian, di mana salah satunya adalah Qualcomm Quick Charge 3.0 yang mampu mengisi daya perangkat yang kompatibel 4x lebih cepat daripada biasanya.",
    },
    {
      name: "Aukey PA-T9",
      pict: "https://1.bp.blogspot.com/-WtBMwAf35kQ/XpPyRnmOttI/AAAAAAAAEv4/RbdJz4HROJIR9HQuvl5-yNDKSkChAEkkQCLcBGAsYHQ/s1600/pa-t9%2B4.jpg",
      desk: "Aukey PA-T9. Pengisi daya cepat yang bisa Anda dapatkan di bawah Rp 200 ribu ini juga datang dengan teknologi Qualcomm Quick Charge 3.0. Hasilnya, smartphone yang kompatibel dapat diisi ulang hingga 80% dalam waktu 35 menit saja!",
    },

  ];

  return (
    <div>
      {charger.map((v, i) => (
        <Charge key={i} name={v.name} pict={v.pict} desk={v.desk} />
      ))}
    </div>
  );
};

export default App;