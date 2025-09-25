import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const governanceData = [
  {
    sector: 'AI-based Decision Support System for Doctors',
    efficiency: 'AI-based Decision Support System for Doctors and Hospital Administrators eHealth HMS generates a significant volume',
    savings: 'Sep 22, 2025',
    enddate: 'Sep 22, 2025',
    implementation: 'Sep 30, 2025',
    status: 'Login And Submit'
  },
  {
    sector: 'AI-based Decision Support System for Doctors',
    efficiency: 'AI-based Decision Support System for Doctors and Hospital Administrators eHealth HMS generates a significant volume',
    savings: 'Sep 22, 2025',
    enddate: 'Sep 22, 2025',
    implementation: 'Sep 30, 2025',
    status: 'Login And Submit'
  },
  {
    sector: 'AI-based Decision Support System for Doctors',
    efficiency: 'AI-based Decision Support System for Doctors and Hospital Administrators eHealth HMS generates a significant volume',
    savings: 'Sep 22, 2025',
    enddate: 'Sep 22, 2025',
    implementation: 'Sep 30, 2025',
    status: 'Login And Submit'
  },
  {
    sector: 'AI-based Decision Support System for Doctors',
    efficiency: 'AI-based Decision Support System for Doctors and Hospital Administrators eHealth HMS generates a significant volume',
    savings: 'Sep 22, 2025',
    enddate: 'Sep 22, 2025',
    implementation: 'Sep 30, 2025',
    status: 'Login And Submit'
  },
  {
    sector: 'AI-based Decision Support System for Doctors',
    efficiency: 'AI-based Decision Support System for Doctors and Hospital Administrators eHealth HMS generates a significant volume',
    savings: 'Sep 22, 2025',
    enddate: 'Sep 22, 2025',
    implementation: 'Sep 30, 2025',
    status: 'Login And Submit'
  },
  // {
  //   sector: 'Public Safety',
  //   efficiency: '89%',
  //   savings: '$2.7M',
  //   implementation: 'Testing',
  //   status: 'info'
  // }
];

export const DataTable = () => {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-t from-kai-purple/10 to-background">
      <div className="mx-20">
        <div className={`transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Published Ideas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             We are welcoming innovative ideas to transform governance with AI.
            </p>
          </div>

          <div className="card-glass rounded-xl overflow-hidden glow-border ">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-kai-cyan font-semibold">Idea Title</TableHead>
                  <TableHead className="text-kai-cyan font-semibold">Description</TableHead>
                  <TableHead className="text-kai-cyan font-semibold">Published Date</TableHead>
                  <TableHead className="text-kai-cyan font-semibold">Closing Date</TableHead>
                  <TableHead className="text-kai-cyan font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {governanceData.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className={`border-border/30 hover:bg-kai-purple/20 transition-colors duration-300 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TableCell className="font-medium text-foreground">{item.sector}</TableCell>
                    <TableCell>
                      <span className="font-semibold">{item.efficiency}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-kai-cyan font-semibold">{item.savings}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-kai-cyan font-semibold">{item.enddate}</span>
                    </TableCell>
                    {/* <TableCell>{item.implementation}</TableCell> */}
                    <TableCell>
                      {/* <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'success' 
                          ? 'bg-kai-cyan/20 text-kai-cyan border border-kai-cyan/30' 
                          : item.status === 'warning'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-kai-blue/20 text-kai-blue border border-kai-blue/30'
                      }`}>
                        {item.implementation}
                      </span> */}
                   
                    <button className='bg-gradient-to-r text-xs text-nowrap px-2 py-1 from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        Login & Submit
                    </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* <div style={{ background: "white", borderRadius: "8px", padding: "1rem" }}>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr style={{ background: "#f0f0f0" }}>
        <th style={{ padding: "8px", borderBottom: "1px solid #ccc", color: "black", fontWeight: "bold" }}>Idea Title</th>
        <th style={{ padding: "8px", borderBottom: "1px solid #ccc", color: "black", fontWeight: "bold" }}>Description</th>
        <th style={{ padding: "8px", borderBottom: "1px solid #ccc", color: "black", fontWeight: "bold" }}>Published Date</th>
        <th style={{ padding: "8px", borderBottom: "1px solid #ccc", color: "black", fontWeight: "bold" }}>Closing Date</th>
        <th style={{ padding: "8px", borderBottom: "1px solid #ccc", color: "black", fontWeight: "bold" }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {governanceData.map((item, index) => (
        <tr
          key={index}
          style={{
            borderBottom: "1px solid #eee",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          <td style={{ padding: "8px", color: "black" }}>{item.sector}</td>
          <td style={{ padding: "8px", color: "black" }}>{item.efficiency}</td>
          <td style={{ padding: "8px", color: "black" }}>{item.savings}</td>
          <td style={{ padding: "8px", color: "black" }}>{item.enddate}</td>
          <td style={{ padding: "8px", color: "black" }}>
            <button
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#007bff")}
            >
              Login & Submit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> */}


          <div className="mt-8 text-center">
            {/* <button className="px-6 py-3 bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              View Full Report
            </button> */}
          </div>
        </div>
      </div>
      <div className='    py-10 bg-gradient-to-t from-kai-purple/10 to-background'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-white mb-3'>We value your feedback!</h2>
          <p className='text-white mb-3'>Your insights help us improve. Please take a moment to share your thoughts.</p>
          <button
            // onClick={() => setFeedbackFormOpen(true)}
           // className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark text-black font-semibold'
           className='px-6 py-3 bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'
          >
            Give Feedback
          </button>
        </div>
      </div>
    </section>
  );
};